import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Search, Clock, Calendar, Eye, ExternalLink } from "lucide-react";
import { useState } from "react";

const youtubeData = [
  {
    id: 1,
    title: "Current Affairs Module Batch - July 2025 | Complete Analysis",
    category: "Current Affairs",
    examType: "UPSC",
    duration: "2h 45m",
    views: 125000,
    publishDate: "14 July 2025",
    description: "Comprehensive analysis of current affairs for July 2025 covering all important national and international events with detailed explanations.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "Current Affairs 2025",
    topics: ["National Affairs", "International Relations", "Economy", "Environment"]
  },
  {
    id: 2,
    title: "Economy Current Affairs 2025 | RBI Policies & Banking Sector",
    category: "Economy",
    examType: "Banking",
    duration: "1h 30m",
    views: 89000,
    publishDate: "12 July 2025",
    description: "Deep dive into economic current affairs focusing on RBI monetary policies, banking sector reforms, and financial market developments.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "Banking Preparation 2025",
    topics: ["Monetary Policy", "Banking Reforms", "Financial Markets", "Government Schemes"]
  },
  {
    id: 3,
    title: "UPSC Prelims Strategy 2025 | Complete Roadmap",
    category: "Strategy",
    examType: "UPSC",
    duration: "3h 15m",
    views: 156000,
    publishDate: "10 July 2025",
    description: "Complete strategy session for UPSC Prelims 2025 including study plan, time management, and subject-wise preparation techniques.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "UPSC Strategy Sessions",
    topics: ["Study Plan", "Time Management", "Mock Tests", "Revision Strategy"]
  },
  {
    id: 4,
    title: "SSC CGL Mathematics | Advanced Problem Solving",
    category: "Mathematics",
    examType: "SSC",
    duration: "2h 10m",
    views: 67000,
    publishDate: "08 July 2025",
    description: "Advanced mathematics problem solving session for SSC CGL covering algebra, geometry, and data interpretation with shortcut techniques.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "SSC CGL Preparation",
    topics: ["Algebra", "Geometry", "Statistics", "Problem Solving"]
  },
  {
    id: 5,
    title: "Editorial Discussion | The Hindu & Indian Express Analysis",
    category: "Editorial Analysis",
    examType: "UPSC",
    duration: "1h 45m",
    views: 94000,
    publishDate: "06 July 2025",
    description: "Weekly editorial analysis from The Hindu and Indian Express covering important policy issues, international relations, and social topics.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "Editorial Analysis",
    topics: ["Policy Analysis", "International Relations", "Social Issues", "Opinion Writing"]
  },
  {
    id: 6,
    title: "Railway Group D Technical Knowledge | Complete Coverage",
    category: "Technical",
    examType: "Railway",
    duration: "2h 55m",
    views: 43000,
    publishDate: "04 July 2025",
    description: "Comprehensive technical knowledge session for Railway Group D covering mechanical, electrical, and civil engineering concepts.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    playlist: "Railway Preparation",
    topics: ["Mechanical Engineering", "Electrical Systems", "Civil Engineering", "Safety Procedures"]
  }
];

const YouTube = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExam, setSelectedExam] = useState("all");

  const filteredVideos = youtubeData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    const matchesExam = selectedExam === "all" || video.examType === selectedExam;
    
    return matchesSearch && matchesCategory && matchesExam;
  });

  const categories = [...new Set(youtubeData.map(item => item.category))];
  const examTypes = [...new Set(youtubeData.map(item => item.examType))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">YouTube Library</h1>
          <p className="text-xl opacity-90">
            Access our complete video library with expert sessions and analysis
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Exams</SelectItem>
                  {examTypes.map(exam => (
                    <SelectItem key={exam} value={exam}>{exam}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="default"
                className="w-full"
                asChild
              >
                <a
                  href="https://youtube.com/@academyprep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Channel
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-all overflow-hidden">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16"
                    asChild
                  >
                    <a
                      href={`https://youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-8 w-8" />
                    </a>
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{video.category}</Badge>
                    <Badge variant="outline">{video.examType}</Badge>
                  </div>
                </div>
                <CardTitle className="text-lg text-primary leading-tight">
                  {video.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{video.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{video.publishDate}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {video.description}
                </p>
                
                {/* Topics */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {video.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Playlist Info */}
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Part of Playlist:</div>
                  <div className="text-sm font-medium">{video.playlist}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1" asChild>
                    <a
                      href={`https://youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={`https://youtube.com/playlist?list=PLrAXtmRdnEQs_${video.examType}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Playlist
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No videos found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all videos
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTube;