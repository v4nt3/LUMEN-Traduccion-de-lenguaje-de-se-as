import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import VideoTutorial from "@/components/video-tutorial"
import Gallery from "@/components/gallery"
import Download from "@/components/download"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <VideoTutorial />
        <Gallery />
        <Download />
      </main>
      <Footer />
    </>
  )
}
