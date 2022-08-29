import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 footer-background">
      <div className="wrapper container mx-auto px-5">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-tight md:pr-8">
          Lorem ipsum
        </h1>
      </div>
    </section>
  )
}