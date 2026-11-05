import { useQuery } from '@tanstack/react-query'
import { MotionConfig } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { Link } from 'react-router'

import { ErrorNote } from '../components/primitives'
import { HeroSection } from '../components/ui/hero-section-4'
import { api } from '../lib/api'
import { PUBLIC_ROOMS, ROLE_LABELS, ROOMS, type RoomInfo } from '../lib/rooms'
import type { ProfileResponse } from '../lib/types'
import { useAuth } from '../store/auth'

// Foto lanskap dari Unsplash (lisensi Unsplash: bebas dipakai tanpa atribusi).
const HERO_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80'

const DEFAULT_SUBTITLE =
  'Selamat datang di rumah digitalku: tempat belajar bahasa, backend, dan AI, sekaligus menyimpan cerita dan kenangan.'

export default function Landing() {
  const user = useAuth((s) => s.user)
  const query = useQuery({ queryKey: ['profile'], queryFn: () => api<ProfileResponse>('/profile') })
  const profile = query.data?.profile
  const openRooms = user?.rooms ?? PUBLIC_ROOMS
  // Tombol kedua membuka ruangan pertama (selain Biodata) yang boleh dimasuki; tamu diajak masuk.
  const nextRoom = user ? ROOMS.find((room) => room.id !== 'biodata' && openRooms.includes(room.id)) : undefined

  return (
    <>
      {/* reducedMotion="user": animasi geser dimatikan bila sistem meminta gerakan minimal. */}
      <MotionConfig reducedMotion="user">
        {/* bg-stone-900: latar cadangan bila foto gagal dimuat. isolate membuat konteks tumpukan
            sendiri, sehingga lapisan foto (z-index -1) tetap di atas latar cadangan itu. */}
        <HeroSection
          className="isolate h-[calc(100svh-4rem)] min-h-[34rem] bg-stone-900 px-4"
          title={profile?.full_name ?? 'Trias Aji Lomanto'}
          subtitle={profile?.headline || DEFAULT_SUBTITLE}
          primaryButtonText="Kenalan dulu"
          primaryButtonHref="/biodata"
          secondaryButtonText={nextRoom ? `Buka ${nextRoom.name}` : 'Masuk'}
          secondaryButtonHref={nextRoom?.path ?? '/login'}
          imageUrl={HERO_IMAGE}
        />
      </MotionConfig>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {query.isError && (
          <div className="mb-6">
            <ErrorNote error={query.error} />
          </div>
        )}
        <h2 className="font-display text-2xl sm:text-3xl">Ruangan di rumah ini</h2>
        <p className="mt-1 text-muted">
          {user ? (
            <>
              Halo, {user.name}! Kamu masuk sebagai <strong className="text-ink">{ROLE_LABELS[user.role]}</strong>; ruangan di
              bawah terbuka sesuai peran itu.
            </>
          ) : (
            'Setiap ruangan punya pintunya sendiri dan terbuka sesuai peranmu.'
          )}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} open={openRooms.includes(room.id)} />
          ))}
        </div>
      </section>
    </>
  )
}

function RoomCard({ room, open }: { room: RoomInfo; open: boolean }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className={`grid size-11 place-items-center rounded-xl ${room.tint}`}>
          <room.icon className="size-5" aria-hidden />
        </span>
        {!open && <Lock className="size-4 text-muted" aria-label="Terkunci" />}
      </div>
      <p className="mt-4 text-xs font-semibold tracking-widest text-muted uppercase">{room.place}</p>
      <h3 className="text-lg font-semibold">{room.name}</h3>
      <p className="mt-1 text-sm text-muted">{room.description}</p>
      <p className={`mt-4 flex items-center gap-1 text-sm font-semibold ${open ? 'text-accent' : 'text-muted'}`}>
        {open ? (
          <>
            Masuk <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
          </>
        ) : (
          room.audience
        )}
      </p>
    </>
  )
  const base = 'group rounded-2xl border border-line bg-surface p-5 shadow-sm transition'
  return open ? (
    <Link to={room.path} className={`${base} hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md`}>
      {body}
    </Link>
  ) : (
    <div className={`${base} opacity-75`}>{body}</div>
  )
}
