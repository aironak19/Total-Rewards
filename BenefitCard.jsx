import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const BenefitCard = ({ title, description, icon: Icon, category, highlights, onClick, className = "" }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'health':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'timeoff':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'financial':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'events':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <Card className={`benefit-card cursor-pointer group ${className}`} onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {Icon && (
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            )}
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              {category && (
                <Badge variant="secondary" className={`mt-1 ${getCategoryColor(category)}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm mb-4">
          {description}
        </CardDescription>
        {highlights && highlights.length > 0 && (
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        )}
        <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto font-medium text-primary hover:text-primary/80">
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default BenefitCard

