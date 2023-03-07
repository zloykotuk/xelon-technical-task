<?php

namespace App\Jobs;

use App\Events\SendCurrencyInfo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class UpdateCurrencyInfo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $currencyData = Http::get('https://api.monobank.ua/bank/currency');
        if ($currencyData->successful()) {
            Cache::set('currency', $currencyData->json());
            broadcast(new SendCurrencyInfo($currencyData->json()));
            return;
        }

        Log::error('Error Job[UpdateCurrencyInfo] : ' . $currencyData->body());
    }
}
