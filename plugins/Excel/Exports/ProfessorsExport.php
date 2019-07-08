<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Professor;

class ProfessorsExport implements  FromQuery, WithHeadings, WithMapping
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
            'Email',
            'Mobile',
            'Area',

        ];
    }

    public function map($professor): array
    {
        return [
            $professor->id,
            $professor->user->first_name.' '.$professor->user->last_name,
            $professor->user->email,
            $professor->user->mobile,
            $professor->area,
        ];
    }

    public function query()
    {
        $data = $this->request->only('search');

        return Professor::query()
            ->when($data['search'], function ($q) use ($data) {
                $q->where('name', 'like', '%' . $data['search'] . '%');
            });
    }
}
