import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, FileText, Play, Users, Award, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Master Your Competitive Exams
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive preparation platform for UPSC, Banking, SSC, Railway and other competitive exams with daily current affairs, study materials, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/current-affairs">
                <Calendar className="h-5 w-5 mr-2" />
                Daily Current Affairs
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/materials">
                <FileText className="h-5 w-5 mr-2" />
                Study Materials
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From daily current affairs to comprehensive study materials, we provide all the resources you need for competitive exam preparation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Daily Current Affairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Updated daily with comprehensive coverage of national and international affairs
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/current-affairs">Explore</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Study Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Downloadable PDFs, practice sets, and comprehensive study guides
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/materials">Download</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Editorial Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Weekly editorial discussions and in-depth analysis of important topics
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/editorials">Read</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Video Library</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert-led video sessions and comprehensive course modules
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/youtube">Watch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Current Affairs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Current Affairs</h2>
            <Button variant="outline" asChild>
              <Link to="/current-affairs">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: "15 July 2025",
                title: "Daily Current Affairs – 15 July 2025",
                highlights: [
                  "PM Modi inaugurates semiconductor facility",
                  "India-Japan strategic partnership strengthened",
                  "RBI announces digital currency pilot"
                ]
              },
              {
                date: "14 July 2025", 
                title: "Daily Current Affairs – 14 July 2025",
                highlights: [
                  "New education policy in 5 states",
                  "GDP growth reaches 7.2%",
                  "ISRO satellite launch success"
                ]
              },
              {
                date: "13 July 2025",
                title: "Daily Current Affairs – 13 July 2025", 
                highlights: [
                  "G20 summit climate commitments",
                  "Environmental protection laws",
                  "Defense budget increased 12%"
                ]
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">50K+</div>
              <p className="opacity-90">Active Students</p>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <p className="opacity-90">Success Stories</p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="opacity-90">Success Rate</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have achieved their dreams with our comprehensive preparation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/current-affairs">
                Start Learning Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://t.me/academyprep" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
