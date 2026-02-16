<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class JurusanController extends Controller
{
    public function __invoke(Request $request, string $slug)
    {
        $jurusanList = [
            'teknik-kendaraan-ringan' => [
                'title' => 'Teknik Kendaraan Ringan',
                'image' => 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80',
                'description' => 'Program keahlian yang menekankan keterampilan perawatan, diagnosa, dan perbaikan kendaraan ringan dengan praktik langsung di bengkel sekolah.',
                'prospects' => [
                    'Teknisi bengkel kendaraan ringan',
                    'Service advisor otomotif',
                    'Wirausaha bengkel mandiri',
                    'Quality control otomotif',
                ],
                'learning' => [
                    'Dasar-dasar mesin dan sistem kendaraan',
                    'Perawatan berkala dan diagnosa kerusakan',
                    'Sistem kelistrikan dan injeksi modern',
                    'Keselamatan kerja dan standar industri',
                ],
                'modules' => [
                    [
                        'title' => 'Modul Dasar Mesin',
                        'file' => '/downloads/modul-dasar-mesin.pdf',
                    ],
                    [
                        'title' => 'Modul Sistem Kelistrikan',
                        'file' => '/downloads/modul-sistem-kelistrikan.pdf',
                    ],
                ],
            ],
            'teknik-komputer-dan-jaringan' => [
                'title' => 'Teknik Komputer dan Jaringan',
                'image' => 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&q=80',
                'description' => 'Fokus pada perancangan jaringan, konfigurasi perangkat, serta keamanan dan maintenance infrastruktur teknologi informasi.',
                'prospects' => [
                    'Network administrator',
                    'IT support specialist',
                    'Teknisi jaringan fiber',
                    'System integrator',
                ],
                'learning' => [
                    'Perakitan dan perawatan perangkat komputer',
                    'Konfigurasi jaringan LAN/WAN',
                    'Keamanan jaringan dan troubleshooting',
                    'Manajemen server dan layanan jaringan',
                ],
                'modules' => [
                    [
                        'title' => 'Modul Jaringan Dasar',
                        'file' => '/downloads/modul-jaringan-dasar.pdf',
                    ],
                    [
                        'title' => 'Modul Keamanan Jaringan',
                        'file' => '/downloads/modul-keamanan-jaringan.pdf',
                    ],
                ],
            ],
            'akuntansi' => [
                'title' => 'Akuntansi',
                'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
                'description' => 'Mengembangkan kompetensi pencatatan transaksi, penyusunan laporan keuangan, dan administrasi bisnis berbasis praktik.',
                'prospects' => [
                    'Staff akuntansi',
                    'Admin keuangan',
                    'Junior auditor',
                    'Wirausaha jasa pembukuan',
                ],
                'learning' => [
                    'Dasar-dasar akuntansi keuangan',
                    'Penyusunan laporan keuangan',
                    'Perpajakan dan administrasi bisnis',
                    'Penggunaan aplikasi akuntansi',
                ],
                'modules' => [
                    [
                        'title' => 'Modul Akuntansi Dasar',
                        'file' => '/downloads/modul-akuntansi-dasar.pdf',
                    ],
                    [
                        'title' => 'Modul Perpajakan',
                        'file' => '/downloads/modul-perpajakan.pdf',
                    ],
                ],
            ],
        ];

        if (!array_key_exists($slug, $jurusanList)) {
            abort(404);
        }

        return Inertia::render('jurusan', [
            'canRegister' => Features::enabled(Features::registration()),
            'jurusan' => $jurusanList[$slug],
        ]);
    }
}
