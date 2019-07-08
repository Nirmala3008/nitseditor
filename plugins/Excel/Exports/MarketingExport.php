<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Marketing;

class MarketingExport implements  FromQuery, WithHeadings, WithMapping
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
            'Address',
            'Mobile',

        ];
    }

    public function map($marketing): array
    {
        return [
            $marketing->id,
            $marketing->user->first_name.' '.$marketing->user->last_name,
            $marketing->user->email,
            $marketing->address,
            $marketing->user->mobile,
        ];
    }

    public function query()
    {
        $data = $this->request->only('search');

        return Marketing::query()
            ->when( $data['search'] , function($q) use( $data){
                $q->whereHas('user', function ($q) use ($data) {
                    $q->where('first_name', 'like', '%'.$data['search'].'%')
                        ->orWhere('last_name', 'like', '%'.$data['search'].'%');
                });
            });
    }
}
