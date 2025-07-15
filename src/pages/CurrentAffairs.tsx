import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const currentAffairsData = [
  {
    id: "2025-07-15",
    date: "15 July 2025",
    title: "Daily Current Affairs – 15 July 2025",
    categories: ["National", "International", "Economy", "Appointments"],
    highlights: [
      "PM Modi inaugurates new semiconductor facility in Gujarat",
      "India-Japan strategic partnership strengthened with new trade agreements",
      "RBI announces new digital currency pilot program",
      "New Chief Justice appointed to Supreme Court",
      "Nobel Prize committee announces new selection criteria"
    ],
    readTime: "8 min read"
  },
  {
    id: "2025-07-14",
    date: "14 July 2025",
    title: "Daily Current Affairs – 14 July 2025",
    categories: ["National", "Economy", "Science", "Sports"],
    highlights: [
      "New education policy implementation in 5 states",
      "GDP growth rate reaches 7.2% in Q1 FY2025",
      "ISRO successfully launches communication satellite",
      "India wins gold in Asian Games badminton",
      "Green energy sector sees 40% investment increase"
    ],
    readTime: "7 min read"
  },
  {
    id: "2025-07-13",
    date: "13 July 2025",
    title: "Daily Current Affairs – 13 July 2025",
    categories: ["International", "Environment", "Defense", "Awards"],
    highlights: [
      "G20 summit concludes with climate commitments",
      "New environmental protection laws enacted",
      "Defense budget allocation increased by 12%",
      "Indian scientist wins international research award",
      "Solar energy production crosses 50GW milestone"
    ],
    readTime: "6 min read"
  }
];

const CurrentAffairs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Daily Current Affairs</h1>
          <p className="text-xl opacity-90">
            Stay updated with the latest developments across all sectors
          </p>
        </div>
      </div>

      {/* Current Affairs List */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {currentAffairsData.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{item.date}</span>
                    <Clock className="h-4 w-4 ml-4" />
                    <span className="text-sm">{item.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/current-affairs/${item.id}`}>
                      Read Full <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Button variant="default" size="sm" asChild>
                    <Link to={`/current-affairs/${item.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Detailed Analysis
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairs;