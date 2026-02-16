<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class TentangSekolahController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render('tentang-sekolah', [
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }
}
