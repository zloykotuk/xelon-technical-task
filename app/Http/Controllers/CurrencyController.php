<?php

namespace App\Http\Controllers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class CurrencyController extends Controller
{
    public function index(): JsonResource
    {
        return JsonResource::make(['currency' => Cache::get('currency')]);
    }
}
