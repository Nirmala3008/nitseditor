<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Shop;

class ShopExport implements  FromQuery, WithHeadings, WithMapping
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
            'Shop Name',
            'Name',
            'Email',
            'Address',
            'Mobile',

        ];
    }

    public function map($shop): array
    {
        return [
            $shop->id,
            $shop->shop_name,
            $shop->user->first_name.' '.$shop->user->last_name,
            $shop->user->email,
            $shop->address,
            $shop->user->mobile,

        ];
    }

    public function query()
    {
        $data = $this->request->only('search');

        return Shop::query()
            ->when($data['search'], function ($q) use ($data) {
                $q->where('shop_name', 'like', '%' . $data['search'] . '%');
            });
    }
}
