<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderProcessedMail extends Mailable
{
    use Queueable, SerializesModels;

    public array $mailData;

    public function __construct(array $mailData)
    {
        $this->mailData = $mailData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Order Processed',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.order-processed',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
