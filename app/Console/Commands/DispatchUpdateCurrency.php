<?php

namespace App\Console\Commands;

use App\Jobs\UpdateCurrencyInfo;
use Illuminate\Console\Command;

class DispatchUpdateCurrency extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:dispatch-update-currency';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Dispatch update currency';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        UpdateCurrencyInfo::dispatch();
    }
}
