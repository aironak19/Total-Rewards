import { useState } from 'react'
import BenefitCard from './BenefitCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Calendar, 
  DollarSign, 
  Gift, 
  Stethoscope, 
  Plane, 
  GraduationCap,
  Baby,
  PiggyBank,
  Smartphone,
  Car,
  Coffee
} from 'lucide-react'

const BenefitsGrid = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const benefits = [
    {
      id: 1,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage for you and your family.",
      icon: Heart,
      category: "health",
      highlights: [
        "Medical insurance with wide network",
        "Dental and vision coverage",
        "Preventive care included"
      ]
    },
    {
      id: 2,
      title: "Paid Time Off",
      description: "Generous PTO policy with earned and casual leave options.",
      icon: Calendar,
      category: "timeoff",
      highlights: [
        "Earned leaves for vacation",
        "Casual leaves for personal time",
        "Flexible scheduling"
      ]
    },
    {
      id: 3,
      title: "National Pension Scheme",
      description: "Government-regulated retirement savings with tax benefits.",
      icon: PiggyBank,
      category: "financial",
      highlights: [
        "Tax-efficient retirement planning",
        "Government-backed security",
        "Flexible investment options"
      ]
    },
    {
      id: 4,
      title: "Marriage & Childbirth Gifts",
      description: "₹5,000 gift cards to celebrate life's special moments.",
      icon: Gift,
      category: "events",
      highlights: [
        "₹5,000 for marriage",
        "₹5,000 for childbirth",
        "Quick processing within 15 days"
      ]
    },
    {
      id: 5,
      title: "Flexi-Benefits",
      description: "Tax-efficient salary structure with multiple allowance options.",
      icon: DollarSign,
      category: "financial",
      highlights: [
        "Academic research allowance",
        "Communication allowance",
        "Food and fuel allowances"
      ]
    },
    {
      id: 6,
      title: "Leave Travel Allowance",
      description: "Tax-free travel benefits for you and your family.",
      icon: Plane,
      category: "financial",
      highlights: [
        "Annual travel allowance",
        "Tax exemption benefits",
        "Family coverage included"
      ]
    },
    {
      id: 7,
      title: "Learning & Development",
      description: "Support for professional growth and skill development.",
      icon: GraduationCap,
      category: "events",
      highlights: [
        "Course fee reimbursement",
        "Professional certification support",
        "Skill development programs"
      ]
    },
    {
      id: 8,
      title: "Special Leave Programs",
      description: "Additional leave options for life's unique circumstances.",
      icon: Calendar,
      category: "timeoff",
      highlights: [
        "Maternity/Paternity leave",
        "Bereavement leave",
        "Emergency leave options"
      ]
    },
    {
      id: 9,
      title: "Gadget Allowance",
      description: "Technology allowance for work-related equipment and devices.",
      icon: Smartphone,
      category: "financial",
      highlights: [
        "Annual gadget budget",
        "Work equipment support",
        "Technology upgrades"
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Benefits', count: benefits.length },
    { id: 'health', name: 'Health', count: benefits.filter(b => b.category === 'health').length },
    { id: 'timeoff', name: 'Time Off', count: benefits.filter(b => b.category === 'timeoff').length },
    { id: 'financial', name: 'Financial', count: benefits.filter(b => b.category === 'financial').length },
    { id: 'events', name: 'Life Events', count: benefits.filter(b => b.category === 'events').length }
  ]

  const filteredBenefits = benefits.filter(benefit => {
    const matchesCategory = selectedCategory === 'all' || benefit.category === selectedCategory
    const matchesSearch = !searchTerm || 
      benefit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      benefit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      benefit.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <section id="overview" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore Your Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover all the ways Contentstack supports your well-being, growth, and happiness.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              category={benefit.category}
              highlights={benefit.highlights}
              onClick={() => {
                // Scroll to the relevant section
                const sectionMap = {
                  health: '#health',
                  timeoff: '#timeoff',
                  financial: '#financial',
                  events: '#events'
                }
                const section = document.querySelector(sectionMap[benefit.category] || '#overview')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            />
          ))}
        </div>

        {filteredBenefits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No benefits found matching your search criteria.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory('all')}
              className="mt-4"
            >
              View All Benefits
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BenefitsGrid

