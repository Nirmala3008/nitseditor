<?php

namespace Nitseditor\Plugins\Confidence\Exports;


use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Account;

class AccountsExport implements  FromQuery, WithHeadings, WithMapping
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
//            'Coupon Code',
            'Order ID',
//            'Date',
            'Payment Mode',
            'Payment Status',
            'Transaction Type',
            'Total Amount',
        ];
    }

    public function map($account): array
    {
        return [
            $account->id,
//            $account->coupon->code,
            $account->order_id,
//            $account->Carbon::parse(created_at)->format('d-M-Y'),
            $account->payment_mode,
            $account->payment_status,
            $account->transaction_type,
            $account->total_amount,
        ];
    }

    public function query()
    {
        $data = $this->request->only('search');

        return Account::query()
            ->when($data['search'], function ($q) use($data) {
                $q->whereHas('coupon', function ($q) use ($data) {
                    $q->where('code', 'like', '%' . $data['search'] . '%');
                });
            });
    }
}
