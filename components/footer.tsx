import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">ModernSite</h3>
            <p className="text-muted-foreground text-sm">
              Building the future of web development with modern tools and clean design.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Status
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 ModernSite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
