import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageCircle, BookOpen, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Leaf className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            AI-Based Prakriti Classification
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Discover your Ayurvedic constitution (Prakriti) with the power of AI
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understand your unique dosha balance and receive personalized lifestyle, diet, and wellness recommendations rooted in ancient Ayurvedic wisdom.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Link to="/questionnaire" className="group">
            <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                Start Questionnaire
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Complete 25 questions to discover your unique Prakriti balance
              </p>
            </div>
          </Link>

          <Link to="/chat" className="group">
            <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                Ayurvedic Assistant
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Chat with our AI-powered Ayurvedic companion for personalized guidance
              </p>
            </div>
          </Link>

          <Link to="/resources" className="group">
            <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-ayurvedic-leaf/10 rounded-lg group-hover:bg-ayurvedic-leaf/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-ayurvedic-leaf" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                Explore Resources
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Learn about doshas, diet guidelines, and Ayurvedic practices
              </p>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/questionnaire">
            <Button size="lg" variant="ayurvedic" className="text-lg px-8 py-6">
              Begin Your Journey
            </Button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">AI-Powered</div>
            <p className="text-muted-foreground">Advanced ML classifier for accurate Prakriti prediction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">Personalized</div>
            <p className="text-muted-foreground">Tailored recommendations based on your unique constitution</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ayurvedic-leaf mb-2">Ancient Wisdom</div>
            <p className="text-muted-foreground">Rooted in 5000+ years of Ayurvedic knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
