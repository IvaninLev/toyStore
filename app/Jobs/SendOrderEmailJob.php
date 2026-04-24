<?php

namespace App\Jobs;

use App\Mail\OrderProcessedMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendOrderEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public array $mailData;

    public function __construct(Array $mailData) {
        $this->mailData = $mailData;

    }

    public function handle(): void
    {
        \Mail::to($this->mailData['email'])->send(new OrderProcessedMail($this->mailData));
    }
}
