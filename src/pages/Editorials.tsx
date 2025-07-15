import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, ThumbsUp, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";

const editorialsData = [
  {
    id: 1,
    title: "5 Editorials of the Week - Third Week July 2025",
    type: "Weekly Analysis",
    publishDate: "15 July 2025",
    readTime: "15 min read",
    views: 8420,
    likes: 340,
    comments: 45,
    description: "Deep analysis of the most important editorial pieces from leading newspapers covering policy changes, international relations, and economic reforms.",
    editorials: [
      {
        newspaper: "The Hindu",
        headline: "Digital India 2.0: The Road Ahead",
        summary: "Analysis of India's digital transformation and future challenges"
      },
      {
        newspaper: "Indian Express",
        headline: "Climate Policy and Economic Growth",
        summary: "Balancing environmental concerns with economic development"
      },
      {
        newspaper: "Times of India",
        headline: "Education Reform: Implementation Challenges",
        summary: "NEP 2020 implementation and ground-level challenges"
      },
      {
        newspaper: "Business Standard",
        headline: "Startup Ecosystem and Regulatory Framework",
        summary: "Government policies supporting startup culture"
      },
      {
        newspaper: "Mint",
        headline: "Financial Inclusion Through Technology",
        summary: "Digital banking and financial accessibility in rural India"
      }
    ],
    tags: ["Policy Analysis", "Weekly Review", "UPSC Mains"],
    hasVideo: true,
    videoLength: "25 min"
  },
  {
    id: 2,
    title: "Economic Survey 2025: Key Takeaways and Analysis",
    type: "Special Analysis",
    publishDate: "12 July 2025",
    readTime: "20 min read",
    views: 12350,
    likes: 567,
    comments: 78,
    description: "Comprehensive analysis of Economic Survey 2025 highlighting key economic indicators, growth projections, and policy recommendations.",
    editorials: [
      {
        newspaper: "Economic Times",
        headline: "Growth Trajectory and Fiscal Management",
        summary: "India's economic growth story and fiscal policy framework"
      },
      {
        newspaper: "Financial Express",
        headline: "Employment Generation and Skill Development",
        summary: "Job creation strategies and skill development initiatives"
      },
      {
        newspaper: "Business Line",
        headline: "Infrastructure Investment and Development",
        summary: "Capital expenditure on infrastructure projects"
      }
    ],
    tags: ["Economy", "Government Policy", "Budget Analysis"],
    hasVideo: true,
    videoLength: "35 min"
  },
  {
    id: 3,
    title: "International Relations Roundup - July 2025",
    type: "Monthly Review",
    publishDate: "10 July 2025",
    readTime: "12 min read",
    views: 6890,
    likes: 289,
    comments: 32,
    description: "Monthly compilation of international relations developments, bilateral agreements, and India's foreign policy initiatives.",
    editorials: [
      {
        newspaper: "The Hindu",
        headline: "India-US Strategic Partnership: New Dimensions",
        summary: "Evolving strategic partnership in technology and defense"
      },
      {
        newspaper: "Indian Express",
        headline: "Indo-Pacific Strategy and Regional Security",
        summary: "India's role in maintaining regional stability"
      },
      {
        newspaper: "Hindustan Times",
        headline: "BRICS Expansion and Multilateral Diplomacy",
        summary: "India's position on BRICS expansion and global governance"
      }
    ],
    tags: ["International Relations", "Foreign Policy", "Diplomacy"],
    hasVideo: false
  },
  {
    id: 4,
    title: "Environment and Climate Change: Editorial Analysis",
    type: "Thematic Review",
    publishDate: "08 July 2025",
    readTime: "18 min read",
    views: 5670,
    likes: 234,
    comments: 28,
    description: "Environmental editorials focusing on climate change policies, renewable energy initiatives, and sustainable development goals.",
    editorials: [
      {
        newspaper: "Down to Earth",
        headline: "Carbon Neutrality: India's Roadmap",
        summary: "India's commitment to net-zero emissions by 2070"
      },
      {
        newspaper: "The Hindu",
        headline: "Renewable Energy and Grid Integration",
        summary: "Challenges in renewable energy adoption and grid modernization"
      },
      {
        newspaper: "Economic Times",
        headline: "Green Finance and Climate Investment",
        summary: "Financing mechanisms for climate-friendly projects"
      }
    ],
    tags: ["Environment", "Climate Change", "Sustainable Development"],
    hasVideo: true,
    videoLength: "22 min"
  }
];

const Editorials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Editorial Analysis</h1>
          <p className="text-xl opacity-90">
            In-depth analysis of important editorial pieces and weekly reviews
          </p>
        </div>
      </div>

      {/* Editorials List */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {editorialsData.map((editorial) => (
            <Card key={editorial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default">{editorial.type}</Badge>
                      {editorial.hasVideo && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          Video Available
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-primary mb-3">
                      {editorial.title}
                    </CardTitle>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{editorial.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{editorial.readTime}</span>
                      </div>
                      {editorial.hasVideo && (
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4" />
                          <span>{editorial.videoLength}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {editorial.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {editorial.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {/* Editorial Headlines */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                    Editorials Covered
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {editorial.editorials.map((item, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="text-sm font-medium text-primary mb-1">
                          {item.newspaper}
                        </div>
                        <h5 className="font-semibold text-sm mb-1">
                          {item.headline}
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{editorial.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{editorial.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{editorial.comments} comments</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {editorial.hasVideo && (
                      <Button variant="secondary" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                    )}
                    <Button variant="default" size="sm" asChild>
                      <Link to={`/editorials/${editorial.id}`}>
                        Read Full Analysis
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Editorial Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editorials;