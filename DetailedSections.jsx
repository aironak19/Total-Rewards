import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Heart, 
  Calendar, 
  DollarSign, 
  Gift, 
  FileText,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react'

const DetailedSections = () => {
  return (
    <div className="space-y-16">
      {/* Health Benefits Section */}
      <section id="health" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-purple mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Health Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health coverage designed to support your well-being at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Medical Coverage</span>
                </CardTitle>
                <CardDescription>
                  Wide range of health benefits as part of our Total Rewards program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Comprehensive Medical Insurance</p>
                      <p className="text-sm text-muted-foreground">Full medical coverage with extensive network</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Dental & Vision Care</p>
                      <p className="text-sm text-muted-foreground">Complete oral and eye care coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Preventive Care</p>
                      <p className="text-sm text-muted-foreground">Annual check-ups and screenings included</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View Employee Guidebook
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Benefits Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Coverage Details</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Explore different health benefits available through interactive flashcards in our comprehensive guide.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Family Coverage</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Extended coverage options available for your family members and dependents.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Easy Claims</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Streamlined claims process with digital submission and quick processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Off Section */}
      <section id="timeoff" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-blue mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Time Off & Leave Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We love our TRIBE time—but me-time matters too! Flexible leave options for work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">During Probation</CardTitle>
                <Badge variant="outline">Casual Leave Only</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Casual leave only during probation period</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Maximum 2 consecutive days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Earned Leaves</CardTitle>
                <Badge variant="default">Annual Vacation</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Accrued monthly for vacation time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Can be carried forward</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Casual Leaves</CardTitle>
                <Badge variant="secondary">Personal Time</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>For personal matters and sick days</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Immediate availability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Special Leave Programs</CardTitle>
              <CardDescription>
                Beyond PTO - Because Life Happens (and We Celebrate It)! 🎉
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                At Contentstack, we know there's more to life than just work—like weddings, big moments, tough times, and everything in between. That's why, beyond your regular PTO, we offer special leave options for life's unique occasions.
              </p>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact People Help Desk
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Benefits Section */}
      <section id="financial" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Financial Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial support including retirement planning and tax-efficient benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>National Pension Scheme (NPS)</CardTitle>
                <CardDescription>
                  Government-regulated retirement savings scheme by PFRDA under the Ministry of Finance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  NPS allows individuals to invest regularly during their working years. Upon retirement, a portion of the corpus can be withdrawn, while the rest is received as a monthly pension.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950">
                    <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">Tax Benefits</h4>
                    <p className="text-xs text-green-700 dark:text-green-300">Additional tax deductions</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">Flexibility</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300">Choose investment options</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flexi-Benefits</CardTitle>
                <CardDescription>
                  Tax benefits and exemptions for full-time employees in India, effective April 1, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Salary Structure:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>CTC:</strong> Total cost to Contentstack</li>
                      <li>• <strong>Basic:</strong> 50% of Fixed CTC</li>
                      <li>• <strong>HRA:</strong> 50% of Basic</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-2">Available Allowances:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <Badge variant="outline">Academic Research</Badge>
                      <Badge variant="outline">Leave Travel</Badge>
                      <Badge variant="outline">Communication</Badge>
                      <Badge variant="outline">Food Allowance</Badge>
                      <Badge variant="outline">Fuel Allowance</Badge>
                      <Badge variant="outline">Gadget Allowance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Events Section */}
      <section id="events" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-purple mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Life Events & Celebrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating life's special moments with gift cards and learning opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Marriage & Childbirth Gift Cards</CardTitle>
                <CardDescription>
                  Contentstack celebrates key life events with gift cards for all India-based full-time employees
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 rounded-lg gradient-purple text-white">
                  <h3 className="text-2xl font-bold">₹5,000</h3>
                  <p className="text-sm opacity-90">Gift card for each event</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Marriage</p>
                      <p className="text-sm text-muted-foreground">Notify within 45 days of wedding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Childbirth</p>
                      <p className="text-sm text-muted-foreground">Notify within 45 days of birth</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Gift card emailed within 15 days of valid request</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning & Development Benefits</CardTitle>
                <CardDescription>
                  Support for personal academic, research, or training pursuits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Eligibility & Purpose:</h4>
                    <p className="text-sm text-muted-foreground">
                      All employees can opt for this exemption, which supports personal academic, research, or training pursuits. 
                      The exemption covers actual expenses up to two months of special allowance per financial year.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Qualifying Expenses:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Course and examination fees</li>
                      <li>• Must be personally borne by employee</li>
                      <li>• Textbooks/reference materials not covered</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Documentation Required:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fee receipts in employee's name</li>
                      <li>• Brief course description</li>
                      <li>• Submit with tax declarations (Dec-Feb)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailedSections

