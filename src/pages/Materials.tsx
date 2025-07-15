import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, BookOpen, FileText, Calendar, Eye } from "lucide-react";
import { useState } from "react";

const materialsData = [
  {
    id: 1,
    title: "UPSC Prelims – Current Affairs – July 2025",
    category: "UPSC",
    subcategory: "Prelims",
    month: "July 2025",
    description: "Comprehensive current affairs compilation for UPSC Prelims covering all major events, government schemes, and policy updates.",
    pages: 120,
    downloads: 15420,
    uploadDate: "15 July 2025",
    fileSize: "12.5 MB",
    topics: ["National Affairs", "International Relations", "Economy", "Environment"]
  },
  {
    id: 2,
    title: "Banking Awareness – June 2025",
    category: "Banking",
    subcategory: "SBI PO",
    month: "June 2025",
    description: "Latest banking sector updates, RBI policies, and financial market trends essential for banking examinations.",
    pages: 85,
    downloads: 8930,
    uploadDate: "10 July 2025",
    fileSize: "8.2 MB",
    topics: ["Banking Policies", "Financial Markets", "Digital Banking", "Regulations"]
  },
  {
    id: 3,
    title: "SSC CGL – Quantitative Aptitude Practice Set",
    category: "SSC",
    subcategory: "CGL",
    month: "July 2025",
    description: "500+ practice questions with detailed solutions covering all topics of quantitative aptitude for SSC CGL.",
    pages: 200,
    downloads: 12340,
    uploadDate: "12 July 2025",
    fileSize: "15.8 MB",
    topics: ["Arithmetic", "Algebra", "Geometry", "Data Interpretation"]
  },
  {
    id: 4,
    title: "UPSC Mains – Essay Writing Guide",
    category: "UPSC",
    subcategory: "Mains",
    month: "June 2025",
    description: "Comprehensive guide for essay writing with 50+ model essays, structure, and evaluation criteria.",
    pages: 150,
    downloads: 9870,
    uploadDate: "08 July 2025",
    fileSize: "10.3 MB",
    topics: ["Essay Structure", "Current Topics", "Philosophical Essays", "Evaluation Tips"]
  },
  {
    id: 5,
    title: "General Knowledge Compendium – 2025",
    category: "General",
    subcategory: "All Exams",
    month: "July 2025",
    description: "Year-long compilation of important facts, figures, and events covering all subjects for competitive exams.",
    pages: 300,
    downloads: 18750,
    uploadDate: "05 July 2025",
    fileSize: "22.1 MB",
    topics: ["History", "Geography", "Science", "Sports", "Awards"]
  },
  {
    id: 6,
    title: "Railway Group D – Technical Knowledge",
    category: "Railway",
    subcategory: "Group D",
    month: "June 2025",
    description: "Technical knowledge compilation for Railway Group D examination with diagrams and practical examples.",
    pages: 95,
    downloads: 6540,
    uploadDate: "03 July 2025",
    fileSize: "11.7 MB",
    topics: ["Mechanical", "Electrical", "Civil", "Safety Procedures"]
  }
];

const Materials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const filteredMaterials = materialsData.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory;
    const matchesMonth = selectedMonth === "all" || material.month === selectedMonth;
    
    return matchesSearch && matchesCategory && matchesMonth;
  });

  const categories = [...new Set(materialsData.map(item => item.category))];
  const months = [...new Set(materialsData.map(item => item.month))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
          <p className="text-xl opacity-90">
            Download comprehensive study materials and practice sets
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
                  placeholder="Search materials..."
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
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  {months.map(month => (
                    <SelectItem key={month} value={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Sort by Date
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Materials Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">{material.category}</Badge>
                      <Badge variant="outline">{material.subcategory}</Badge>
                    </div>
                    <CardTitle className="text-xl text-primary leading-tight">
                      {material.title}
                    </CardTitle>
                  </div>
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {material.description}
                </p>
                
                {/* Topics */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {material.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{material.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span>{material.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="text-muted-foreground">
                    Size: {material.fileSize}
                  </div>
                  <div className="text-muted-foreground">
                    {material.uploadDate}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No materials found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all materials
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;