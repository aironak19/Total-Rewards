import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Shield, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10 blur-lg"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Benefits,
            <br />
            <span className="text-yellow-300">Simplified</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover and explore all the amazing benefits Contentstack offers to support your well-being, growth, and happiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Explore Benefits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
              Download Guide
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Health & Wellness</h3>
              <p className="text-white/80 text-sm">Comprehensive medical coverage</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Financial Security</h3>
              <p className="text-white/80 text-sm">Retirement & tax benefits</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Work-Life Balance</h3>
              <p className="text-white/80 text-sm">Flexible time off & leave options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

