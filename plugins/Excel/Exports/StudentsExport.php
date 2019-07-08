<?php

namespace Nitseditor\Plugins\Confidence\Exports;

use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Nitseditor\Plugins\Confidence\Models\Student;


class StudentsExport implements FromQuery, WithHeadings, WithMapping
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
            'Reg. No',
            'Email',
            'Mobile',
            'Area',
        ];
    }

    public function map($student): array
    {
        return [
            $student->id,
            $student->user->first_name.' '.$student->user->last_name,
            $student->reg_no,
            $student->user->email,
            $student->user->mobile,
            $student->area,
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection
     */

    /**
     * @return Builder
     */
    public function query()
    {
        $data = $this->request->only('stream', 'standard', 'subject', 'classes');

        return Student::query()
            ->when( $data['subject'] , function ($q) use($data){
                $q->where('subject_id' ,$data['subject']);
            })
            ->when( $data['standard'] , function ($q) use($data){
                $q->where('standard_id' ,$data['standard']);
            })
            ->when( $data['stream'] , function ($q) use($data){
                $q->where('stream_id' ,$data['stream']);
            })
            ->when( $data['classes'] , function ($q) use($data){
                $q->where('institute_id' ,$data['classes']);
            });
    }
}
