import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Salad, Dumbbell, Sparkles } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ayurvedic Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the ancient wisdom of Ayurveda and learn how to balance your doshas
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="doshas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="doshas">Understanding Doshas</TabsTrigger>
            <TabsTrigger value="diet">Dietary Guidelines</TabsTrigger>
            <TabsTrigger value="lifestyle">Yoga & Lifestyle</TabsTrigger>
            <TabsTrigger value="herbs">Herbs & Practices</TabsTrigger>
          </TabsList>

          {/* Understanding Doshas */}
          <TabsContent value="doshas" className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-ayurvedic-vata/20 flex items-center justify-center">
                  <span className="text-2xl">💨</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Vata Dosha</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Elements:</strong> Air and Space (Ether)
              </p>
              <p className="text-foreground mb-4">
                Vata governs all movement in the body, including breathing, circulation, and nervous system activity. 
                It is characterized by qualities of cold, dry, light, and mobile.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Physical Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Thin, light body frame</li>
                  <li>Dry skin and hair</li>
                  <li>Cold hands and feet</li>
                  <li>Variable appetite and digestion</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-foreground">Mental Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Quick, creative mind</li>
                  <li>Enthusiastic and energetic</li>
                  <li>Prone to anxiety and worry when imbalanced</li>
                  <li>Light, interrupted sleep</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-ayurvedic-pitta/20 flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Pitta Dosha</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Elements:</strong> Fire and Water
              </p>
              <p className="text-foreground mb-4">
                Pitta governs digestion, metabolism, and transformation in the body. 
                It is characterized by hot, sharp, light, and slightly oily qualities.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Physical Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Medium build with good muscle tone</li>
                  <li>Warm body temperature</li>
                  <li>Strong appetite and digestion</li>
                  <li>Tendency toward redness and inflammation</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-foreground">Mental Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Sharp intellect and focus</li>
                  <li>Goal-oriented and ambitious</li>
                  <li>Prone to anger and irritability when imbalanced</li>
                  <li>Sound, moderate sleep</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-ayurvedic-kapha/20 flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Kapha Dosha</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Elements:</strong> Earth and Water
              </p>
              <p className="text-foreground mb-4">
                Kapha provides structure, lubrication, and stability to the body. 
                It is characterized by heavy, slow, cool, oily, and stable qualities.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Physical Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Sturdy, larger body frame</li>
                  <li>Thick, smooth, oily skin</li>
                  <li>Strong, steady energy</li>
                  <li>Slow digestion, can skip meals</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-foreground">Mental Characteristics:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Calm, steady, and patient</li>
                  <li>Good long-term memory</li>
                  <li>Prone to attachment and lethargy when imbalanced</li>
                  <li>Deep, prolonged sleep</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          {/* Dietary Guidelines */}
          <TabsContent value="diet" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Salad className="w-6 h-6 text-ayurvedic-vata" />
                  <h3 className="text-xl font-bold text-foreground">Vata Diet</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Favor:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Warm, cooked, moist foods</li>
                      <li>Sweet, sour, and salty tastes</li>
                      <li>Ghee, oils, nuts</li>
                      <li>Root vegetables, rice, wheat</li>
                      <li>Warm milk, herbal teas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reduce:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Cold, raw, dry foods</li>
                      <li>Bitter, pungent, astringent tastes</li>
                      <li>Caffeine, refined sugar</li>
                      <li>Beans (except mung)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Salad className="w-6 h-6 text-ayurvedic-pitta" />
                  <h3 className="text-xl font-bold text-foreground">Pitta Diet</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Favor:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Cool, refreshing foods</li>
                      <li>Sweet, bitter, and astringent tastes</li>
                      <li>Coconut, cucumber, melons</li>
                      <li>Leafy greens, milk, ghee</li>
                      <li>Herbal teas (mint, chamomile)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reduce:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Hot, spicy, fried foods</li>
                      <li>Sour, salty, pungent tastes</li>
                      <li>Red meat, alcohol</li>
                      <li>Tomatoes, garlic, chilies</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Salad className="w-6 h-6 text-ayurvedic-kapha" />
                  <h3 className="text-xl font-bold text-foreground">Kapha Diet</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Favor:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Light, dry, warm foods</li>
                      <li>Pungent, bitter, astringent tastes</li>
                      <li>Most vegetables (except potato)</li>
                      <li>Legumes, quinoa, barley</li>
                      <li>Spices: ginger, black pepper</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reduce:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Heavy, oily, cold foods</li>
                      <li>Sweet, sour, salty tastes</li>
                      <li>Dairy, wheat, red meat</li>
                      <li>Excess sweets and fats</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Yoga & Lifestyle */}
          <TabsContent value="lifestyle" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="w-6 h-6 text-ayurvedic-vata" />
                  <h3 className="text-xl font-bold text-foreground">Vata Lifestyle</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Yoga Practices:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Gentle, grounding poses</li>
                      <li>Slow, mindful movements</li>
                      <li>Restorative yoga</li>
                      <li>Focus on hip openers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Daily Routine:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Regular sleep schedule</li>
                      <li>Self-massage with warm oil</li>
                      <li>Warm baths</li>
                      <li>Meditation and pranayama</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="w-6 h-6 text-ayurvedic-pitta" />
                  <h3 className="text-xl font-bold text-foreground">Pitta Lifestyle</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Yoga Practices:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Cooling, moderate intensity</li>
                      <li>Forward bends, twists</li>
                      <li>Moon salutations</li>
                      <li>Avoid overheating</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Daily Routine:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Avoid midday sun</li>
                      <li>Cool showers</li>
                      <li>Time in nature</li>
                      <li>Practice patience</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="w-6 h-6 text-ayurvedic-kapha" />
                  <h3 className="text-xl font-bold text-foreground">Kapha Lifestyle</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Yoga Practices:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Vigorous, energizing</li>
                      <li>Sun salutations</li>
                      <li>Backbends, inversions</li>
                      <li>Power or vinyasa yoga</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Daily Routine:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Wake early (before 6 AM)</li>
                      <li>Regular exercise</li>
                      <li>Dry brushing</li>
                      <li>Stay active and engaged</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Herbs & Practices */}
          <TabsContent value="herbs" className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Ayurvedic Herbs</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Universal Herbs:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Ashwagandha:</strong>
                        <p className="text-sm text-muted-foreground">
                          Adaptogen for stress, energy, and immunity
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Turmeric:</strong>
                        <p className="text-sm text-muted-foreground">
                          Anti-inflammatory, supports digestion and joints
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Triphala:</strong>
                        <p className="text-sm text-muted-foreground">
                          Gentle detoxifier, balances all doshas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Tulsi (Holy Basil):</strong>
                        <p className="text-sm text-muted-foreground">
                          Immune support, stress relief, respiratory health
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Dosha-Specific:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-ayurvedic-vata mt-1">•</span>
                      <div>
                        <strong className="text-foreground">For Vata:</strong>
                        <p className="text-sm text-muted-foreground">
                          Brahmi, Shatavari, Licorice
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ayurvedic-pitta mt-1">•</span>
                      <div>
                        <strong className="text-foreground">For Pitta:</strong>
                        <p className="text-sm text-muted-foreground">
                          Aloe vera, Neem, Coriander
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ayurvedic-kapha mt-1">•</span>
                      <div>
                        <strong className="text-foreground">For Kapha:</strong>
                        <p className="text-sm text-muted-foreground">
                          Ginger, Guggul, Punarnava
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Daily Ayurvedic Practices</h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">1. Dinacharya (Daily Routine)</h3>
                  <p className="text-sm text-muted-foreground">
                    Wake early, practice tongue scraping, oil pulling, self-massage (abhyanga), 
                    and meditation to align with natural rhythms.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">2. Mindful Eating</h3>
                  <p className="text-sm text-muted-foreground">
                    Eat in a calm environment, chew thoroughly, and favor fresh, seasonal, 
                    and locally-grown foods. Avoid overeating.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">3. Pranayama (Breath Work)</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice deep breathing exercises like Nadi Shodhana (alternate nostril breathing) 
                    to balance energy and calm the mind.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">4. Meditation</h3>
                  <p className="text-sm text-muted-foreground">
                    Daily meditation helps quiet the mind, reduce stress, and connect with inner awareness.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources;
