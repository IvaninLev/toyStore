<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ToysRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['required'],
            'avatar' => ['required'],
            'type' => ['required'],
            'price' => ['required', 'integer'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
