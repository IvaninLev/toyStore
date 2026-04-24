<h2>Hello! Your toy is getting ready to be sent</h2>
<p>Payment: {{ ($mailData['amount_total'] ?? 0) / 100 }} {{ strtoupper($mailData['currency'] ?? 'usd') }}</p>

<p>Shipping Address:</p>
<blockquote style=" background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
    {{ $mailData['customer_name'] ?? 'no name provided' }}<br>
    {{ $mailData['address_line1'] ?? 'no address line 1' }}<br>
    @if(!empty($mailData['address_line2'])) {{ $mailData['address_line2'] }}<br> @endif
    {{ $mailData['postal_code'] ?? 'no postal code provided' }} {{ $mailData['city'] ?? 'no city provided' }}<br>
    @if(!empty($mailData['state'])) {{ $mailData['state'] }}<br> @endif
    {{ !empty($mailData['country']) ? strtoupper($mailData['country']) : 'no country provided' }}
</blockquote>
