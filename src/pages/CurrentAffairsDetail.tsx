import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Download, Share2, Bookmark } from "lucide-react";

const CurrentAffairsDetail = () => {
  const { id } = useParams();

  // Mock data for the specific date
  const articleData = {
    id: "2025-07-15",
    date: "15 July 2025",
    title: "Daily Current Affairs – 15 July 2025",
    readTime: "8 min read",
    sections: [
      {
        category: "National Affairs",
        icon: "🏛️",
        items: [
          {
            headline: "PM Modi inaugurates new semiconductor facility in Gujarat",
            details: "The Prime Minister inaugurated India's largest semiconductor manufacturing facility in Gandhinagar, marking a significant step towards achieving self-reliance in chip production. The facility is expected to create 50,000 jobs and reduce import dependency by 30%.",
            significance: "This initiative aligns with the 'Make in India' vision and strengthens India's position in the global semiconductor supply chain.",
            examRelevance: "Important for UPSC Mains GS-3 (Economy, Science & Technology)"
          },
          {
            headline: "New Chief Justice appointed to Supreme Court",
            details: "Justice Ramesh Kumar has been appointed as the new Chief Justice of India, succeeding the retiring CJI. The appointment follows constitutional protocols and parliamentary procedures.",
            significance: "The new CJI brings extensive experience in constitutional law and civil rights cases.",
            examRelevance: "Relevant for Polity and Governance sections in UPSC Prelims and Mains"
          }
        ]
      },
      {
        category: "International Affairs",
        icon: "🌍",
        items: [
          {
            headline: "India-Japan strategic partnership strengthened with new trade agreements",
            details: "Both nations signed comprehensive economic partnership agreements covering technology transfer, defense cooperation, and cultural exchange programs. The deal is worth $15 billion over the next 5 years.",
            significance: "Strengthens India's position in the Indo-Pacific region and enhances bilateral trade relations.",
            examRelevance: "Important for International Relations in UPSC Mains GS-2"
          }
        ]
      },
      {
        category: "Economic Affairs",
        icon: "💰",
        items: [
          {
            headline: "RBI announces new digital currency pilot program",
            details: "The Reserve Bank of India launched an expanded pilot program for the Digital Rupee (e₹) covering 15 major cities. The program includes both wholesale and retail segments.",
            significance: "Represents India's step towards a cashless economy and financial inclusion.",
            examRelevance: "Critical for Economy section in UPSC Mains GS-3"
          }
        ]
      },
      {
        category: "Awards & Recognition",
        icon: "🏆",
        items: [
          {
            headline: "Nobel Prize committee announces new selection criteria",
            details: "The Nobel Committee has updated its selection criteria to include greater emphasis on climate change research and sustainable development contributions.",
            significance: "Reflects global priorities towards environmental conservation and sustainable development goals.",
            examRelevance: "Relevant for current affairs and environmental studies"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/current-affairs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Current Affairs
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold mb-2">{articleData.title}</h1>
          <div className="flex items-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{articleData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{articleData.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <Button variant="default" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Bookmark
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {articleData.sections.map((section, sectionIndex) => (
              <Card key={sectionIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <span className="text-2xl">{section.icon}</span>
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {item.headline}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                            Details
                          </h4>
                          <p className="text-sm leading-relaxed">{item.details}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                            Significance
                          </h4>
                          <p className="text-sm leading-relaxed">{item.significance}</p>
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            {item.examRelevance}
                          </Badge>
                        </div>
                      </div>
                      {itemIndex < section.items.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {articleData.sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {section.icon} {section.category}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Previous Day's Affairs
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Monthly Compilation
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Topic-wise Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairsDetail;