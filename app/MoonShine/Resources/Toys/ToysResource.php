<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\Toys;

use Illuminate\Database\Eloquent\Model;
use App\Models\Toys;
use App\MoonShine\Resources\Toys\Pages\ToysIndexPage;
use App\MoonShine\Resources\Toys\Pages\ToysFormPage;
use App\MoonShine\Resources\Toys\Pages\ToysDetailPage;

use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\Contracts\Core\PageContract;

/**
 * @extends ModelResource<Toys, ToysIndexPage, ToysFormPage, ToysDetailPage>
 */
class ToysResource extends ModelResource
{
    protected string $model = Toys::class;

    protected string $title = 'Toys';

    protected string $column = 'name';
    
    /**
     * @return list<class-string<PageContract>>
     */
    protected function pages(): array
    {
        return [
            ToysIndexPage::class,
            ToysFormPage::class,
            ToysDetailPage::class,
        ];
    }

    protected function search(): array
    {
        return [
            'id',
            'name',
            'type',
        ];
    }
}
