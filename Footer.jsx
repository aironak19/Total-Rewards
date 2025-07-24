import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Mail, 
  Phone, 
  FileText, 
  ExternalLink,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="resources" className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <div>
                <h3 className="font-bold">Contentstack</h3>
                <p className="text-xs text-muted-foreground">Employee Benefits</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting our employees with comprehensive benefits designed for your well-being, growth, and happiness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#health" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Health Benefits
              </a>
              <a href="#timeoff" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Time Off
              </a>
              <a href="#financial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Financial Benefits
              </a>
              <a href="#events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Life Events
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Employee Guidebook
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <ExternalLink className="mr-2 h-4 w-4" />
                People Help Desk
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Need Help?</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">people@contentstack.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">People Help Desk</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              For questions about your benefits, raise a ticket on the People Help Desk or contact the People Team directly.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Contentstack. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for our amazing team</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-3">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                Important Note
              </h5>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                For comprehensive information on exceptions and detailed coverage guidelines, please refer to our Employee Guidebook. 
                All policies may be updated periodically with prior employee notification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

