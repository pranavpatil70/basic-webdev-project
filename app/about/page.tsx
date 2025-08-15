import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of Web Development</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're passionate about creating tools and platforms that empower developers to build exceptional digital
            experiences with ease and efficiency.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that great software should be accessible to everyone. Our mission is to democratize web
                development by providing powerful, intuitive tools that enable developers of all skill levels to create
                amazing digital experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through continuous innovation and community-driven development, we're building the next generation of
                web development tools that prioritize performance, accessibility, and developer experience.
              </p>
              <Button size="lg">Join Our Community</Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">Pushing boundaries in web technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>Building together with our amazing developer community</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>Striving for the highest quality in everything we create</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Passion</CardTitle>
                <CardDescription>Loving what we do and caring deeply about our users</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>Constantly pushing the boundaries of what's possible</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The talented people behind our platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AJ</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-muted-foreground mb-4">CEO & Founder</p>
                <p className="text-sm text-muted-foreground">
                  Passionate about building tools that empower developers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">SM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                <p className="text-muted-foreground mb-4">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Leading our technical vision with 15+ years of experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">DK</span>
                </div>
                <h3 className="text-xl font-bold mb-2">David Kim</h3>
                <p className="text-muted-foreground mb-4">Head of Design</p>
                <p className="text-sm text-muted-foreground">
                  Creating beautiful, intuitive experiences for our users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
