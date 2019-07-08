<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Institute;
use Nitseditor\Plugins\Confidence\Models\Standard;
use Nitseditor\Plugins\Confidence\Models\Stream;

class InstitutesExport implements  FromQuery, WithHeadings, WithMapping
{
    use Exportable;

    private $request;

    /**
     * ExportController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Total Amount'
        ];
    }

    public function map($institute): array
    {
        return [
            $institute->id,
            $institute->name,
            $institute->accounts()->sum('total_amount')
        ];
    }

    public function query()
    {
        $data = $this->request->only('stream', 'standard', 'search');

        return Institute::query()
            ->when($data['search'], function ($q) use ($data) {
                $q->where('name', 'like', '%' . $data['search'] . '%');
            })
            ->when($data['stream'] || $data['standard'], function ($q) use ($data) {
            $q->whereHas('profile', function ($q) use ($data) {
                $q->whereHas('subject', function ($q) use ($data) {
                    $q->whereHas('standard', function ($q) use ($data) {
                        $q->when($data['standard'], function ($q) use ($data) {
                            $standard = Standard::find($data['standard']);
                            $q->where('name', $standard->name);
                        })->when($data['stream'], function ($q) use ($data) {
                            $q->whereHas('stream', function ($q) use ($data) {
                                $stream = Stream::find($data['stream']);
                                $q->where('name', $stream->name);
                            });
                        });
                    });
                });
            });
        });
    }
}
