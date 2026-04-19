<?php

namespace App\Enums;

enum PaginationEnum: int
{
    case PAGE_SIZE = 12;

    public static function size(): int
    {
        return self::PAGE_SIZE->value;
    }
}

