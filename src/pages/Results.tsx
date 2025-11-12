import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { usePrakriti } from '@/context/PrakritiContext';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MessageCircle, RotateCcw, Sparkles } from 'lucide-react';

const Results = () => {
  const { result } = usePrakriti();
  const navigate = useNavigate();

  useEffect(() => {
    if (!result) {
      navigate('/questionnaire');
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  const doshaData = [
    { name: 'Vata', value: result.vata, color: 'hsl(var(--ayurvedic-vata))' },
    { name: 'Pitta', value: result.pitta, color: 'hsl(var(--ayurvedic-pitta))' },
    { name: 'Kapha', value: result.kapha, color: 'hsl(var(--ayurvedic-kapha))' },
  ].sort((a, b) => b.value - a.value);

  const dominantDosha = doshaData[0];

  const doshaDescriptions = {
    Vata: {
      traits: ['Creative', 'Energetic', 'Quick-thinking', 'Enthusiastic', 'Flexible'],
      description: 'Vata represents the elements of air and space. Those with dominant Vata tend to be quick, creative, and adaptable but may experience anxiety and irregularity when imbalanced.',
    },
    Pitta: {
      traits: ['Intelligent', 'Focused', 'Ambitious', 'Passionate', 'Leader'],
      description: 'Pitta embodies fire and water elements. Pitta-dominant individuals are often sharp-minded, goal-oriented, and natural leaders but can become irritable and overly competitive when out of balance.',
    },
    Kapha: {
      traits: ['Calm', 'Steady', 'Compassionate', 'Strong', 'Loyal'],
      description: 'Kapha represents earth and water. Kapha types are grounded, nurturing, and patient but may struggle with lethargy and attachment when imbalanced.',
    },
  };

  const currentDosha = doshaDescriptions[dominantDosha.name as keyof typeof doshaDescriptions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Analysis Complete</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Prakriti Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Your dominant dosha is <span className="font-semibold text-foreground">{dominantDosha.name}</span>
          </p>
        </div>

        {/* Dosha Distribution Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Pie Chart */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Dosha Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={doshaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {doshaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Bar Chart */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Dosha Percentages
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={doshaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="value" name="Percentage">
                  {doshaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Dominant Dosha Details */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-card to-secondary/20 border-border">
          <div className="flex items-start gap-4 mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: dominantDosha.color }}
            >
              {dominantDosha.name[0]}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {dominantDosha.name} Dominant
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentDosha.description}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Traits:</h3>
            <div className="flex flex-wrap gap-2">
              {currentDosha.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* All Doshas Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {doshaData.map((dosha, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
                  style={{ backgroundColor: dosha.color }}
                >
                  {dosha.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{dosha.name}</h3>
                  <p className="text-2xl font-bold" style={{ color: dosha.color }}>
                    {dosha.value}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${dosha.value}%`,
                    backgroundColor: dosha.color,
                  }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/chat">
            <Button size="lg" variant="ayurvedic" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Personalized Recommendations
            </Button>
          </Link>
          <Link to="/questionnaire">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Test
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
