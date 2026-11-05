import { lazy } from 'react'
import { Route, Routes } from 'react-router'

import Layout from './components/Layout'
import RoomGuard from './components/RoomGuard'
import { KENANGAN, VLOG } from './lib/content'
import { Login, Register } from './pages/Auth'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'

// Halaman room dimuat saat dibuka, jadi tamu tidak mengunduh kode ruangan yang tidak bisa ia masuki.
const Biodata = lazy(() => import('./pages/Biodata'))
const ContentRoom = lazy(() => import('./pages/ContentRoom').then((m) => ({ default: m.ContentRoom })))
const ContentDetail = lazy(() => import('./pages/ContentRoom').then((m) => ({ default: m.ContentDetail })))
const Curhat = lazy(() => import('./pages/Curhat'))
const DataManagement = lazy(() => import('./pages/DataManagement'))
const LearningItemPage = lazy(() => import('./pages/learning/LearningItem'))
const LearningRoom = lazy(() => import('./pages/learning/LearningRoom'))
const ReviewPage = lazy(() => import('./pages/learning/Review'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="biodata" element={<Biodata />} />
        <Route element={<RoomGuard room="learning" />}>
          <Route path="learning" element={<LearningRoom />} />
          <Route path="learning/review" element={<ReviewPage />} />
          <Route path="learning/:id" element={<LearningItemPage />} />
        </Route>
        <Route element={<RoomGuard room="vlog" />}>
          <Route path="vlog" element={<ContentRoom key="vlog" config={VLOG} />} />
          <Route path="vlog/:id" element={<ContentDetail key="vlog" config={VLOG} />} />
        </Route>
        <Route element={<RoomGuard room="kenangan" />}>
          <Route path="kenangan" element={<ContentRoom key="kenangan" config={KENANGAN} />} />
          <Route path="kenangan/:id" element={<ContentDetail key="kenangan" config={KENANGAN} />} />
        </Route>
        <Route element={<RoomGuard room="curhat" />}>
          <Route path="curhat" element={<Curhat />} />
        </Route>
        <Route element={<RoomGuard room="data" />}>
          <Route path="data" element={<DataManagement />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
