<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Coupon;

class CouponsExport implements  FromQuery, WithHeadings, WithMapping
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
            'Code',
            'Discount',
            'User Name',
            'User Role',
            'Referral Bonus',
//            'Referral No.',

        ];
    }

    public function map($coupon): array
    {
        return [
            $coupon->id,
            $coupon->code,
            $coupon->discount,
            $coupon->user->first_name.' '.$coupon->user->last_name,
            $coupon->user->role->name,
            $coupon->referral_bonus,

//            $coupon->user->used->count(),

        ];
    }

    public function query()
    {
        $data = $this->request->only('search');

        return Coupon::query()
            ->when( $data['search'] , function($q) use( $data){
                $q->where( 'code' ,'like','%'.$data['search'].'%' );
            });
    }
}
