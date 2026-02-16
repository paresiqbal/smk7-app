<?php

use App\Http\Controllers\JurusanController;
use App\Http\Controllers\TentangSekolahController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('tentang-sekolah', TentangSekolahController::class)->name(
    'tentang-sekolah'
);

Route::get('jurusan/{slug}', JurusanController::class)->name('jurusan.show');

Route::get('ekstrakulikuler', function () {
    return Inertia::render('ekstrakulikuler');
})->name('ekstrakulikuler');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
