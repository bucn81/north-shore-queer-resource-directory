import { useMemo, useState } from 'react';
import { Search, Phone, MapPin, Globe, Heart, Shield, Users, Info } from 'lucide-react';

const RESOURCES = [
  {
    name: "NAGLY (North Shore Alliance of LGBTQ+ Youth)",
    category: "Youth",
    location: "Salem, MA",
    address: "2 East India Square, Suite 121, Salem, MA 01970",
    phone: "(978) 224-2102",
    website: "nagly.org",
    description: "Support and social programs for LGBTQ+ youth on the North Shore.",
    tags: ["Youth", "Social", "Support"]
  },
  {
    name: "NAGLY Lynn",
    category: "Youth",
    location: "Lynn, MA",
    address: "7 Central Square, Lynn, MA (Meets at Raw Art Works)",
    website: "nagly.org",
    description: "Satellite location providing safe space for youth in Lynn.",
    tags: ["Youth", "Safe Space"]
  },
  {
    name: "The North Shore LGBTQ+ Network",
    category: "Advocacy",
    location: "Salem, MA",
    address: "2 Margin St. #776, Salem, MA 01970",
    phone: "(857) 228-4011",
    website: "northshorelgbtqnetwork.org",
    description: "Advocacy and community networking across the North Shore.",
    tags: ["Networking", "Advocacy"]
  },
  {
    name: "North Shore Pride",
    category: "Community",
    location: "North Shore",
    website: "northshorepride.org",
    description: "Annual pride events and community engagement programs.",
    tags: ["Events", "Pride"]
  },
  {
    name: "Younity Access Center",
    category: "Youth",
    location: "Gloucester, MA",
    address: "6 Elm Street, Gloucester, MA 01930",
    phone: "(978) 270-4284",
    description: "Drop-in center for youth and young adults on Cape Ann.",
    tags: ["Youth", "Community"]
  },
  {
    name: "Fenway Health",
    category: "Health",
    location: "Boston, MA",
    address: "1340 Boylston Street, Boston, MA 02215",
    phone: "(617) 267-0900",
    website: "fenwayhealth.org",
    description: "Specialized LGBTQ+ healthcare, research, and advocacy.",
    tags: ["Health", "Trans Health", "Primary Care"]
  },
  {
    name: "Laney Transgender Health Program",
    category: "Health",
    location: "Peabody, MA",
    address: "1 Essex Center Drive, Peabody, MA 01960",
    phone: "(978) 538-4685",
    description: "Comprehensive care for transgender and gender-diverse individuals.",
    tags: ["Trans Health", "Medical"]
  },
  {
    name: "Lynn Community Health Center",
    category: "Health",
    location: "Lynn, MA",
    address: "269 Union Street, Lynn, MA 01901",
    phone: "(781) 581-3900",
    website: "lchcnet.org",
    description: "Community-based healthcare with LGBTQ+ inclusive services.",
    tags: ["Health", "Community"]
  },
  {
    name: "The Trevor Project",
    category: "Crisis",
    location: "National",
    phone: "866-488-7386",
    website: "thetrevorproject.org",
    description: "24/7 crisis intervention and suicide prevention for LGBTQ+ youth.",
    tags: ["Crisis", "Youth", "Mental Health"]
  },
  {
    name: "Trans Lifeline",
    category: "Crisis",
    location: "National",
    phone: "877-565-8860",
    website: "translifeline.org",
    description: "Peer support hotline run by and for trans people.",
    tags: ["Crisis", "Trans", "Peer Support"]
  },
  {
    name: "LGBT National Hotline",
    category: "Crisis",
    location: "National",
    phone: "888-843-4504",
    website: "lgbthotline.org",
    description: "Confidential peer-support and local resources.",
    tags: ["Support", "National"]
  },
  {
    name: "OUT MetroWest",
    category: "Youth",
    location: "Framingham, MA",
    address: "160 Hollis Street, Framingham, MA 01702",
    phone: "(508) 875-2122",
    website: "outmetrowest.org",
    description: "Youth programs for LGBTQ+ middle and high schoolers.",
    tags: ["Youth", "Social"]
  },
  {
    name: "Greater Boston PFLAG",
    category: "Support",
    location: "Waltham, MA",
    address: "PO Box 541619, Waltham, MA 02454",
    phone: "(781) 891-5968",
    website: "gbpflag.org",
    description: "Support, education, and advocacy for families and allies.",
    tags: ["Parents", "Allies", "Support"]
  },
  {
    name: "HAWC (Healing Abuse Working for Change)",
    category: "Support",
    location: "Salem, MA",
    phone: "800-547-1649",
    website: "hawcdv.org",
    description: "Domestic violence support including LGBTQ+ specific advocacy.",
    tags: ["Crisis", "Safety", "Abuse Support"]
  },
  {
    name: "Salem State Center for Justice and Liberation",
    category: "Youth",
    location: "Salem, MA",
    address: "352 Lafayette St, Ellison Campus Center 218B",
    phone: "(978) 542-6506",
    description: "Student-focused LGBTQ+ and social justice support at SSU.",
    tags: ["Students", "University"]
  }
];

const CATEGORIES = ["All", "Youth", "Health", "Crisis", "Support", "Community", "Advocacy"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = useMemo(() => {
    return RESOURCES.filter(res => {
      const matchesSearch =
        res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = activeCategory === 'All' || res.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-indigo-700 text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 fill-pink-400 text-pink-400" />
            <h1 className="text-3xl font-bold tracking-tight">Queer Resource Directory</h1>
          </div>
          <p className="text-indigo-100 text-lg max-w-2xl">
            A curated list of LGBTQ+ resources, health services, and crisis support for the North Shore and Greater Boston community.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-4 z-10 bg-slate-50/95 backdrop-blur py-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, city, or service..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        resource.category === 'Crisis' ? 'bg-red-100 text-red-700' :
                        resource.category === 'Health' ? 'bg-emerald-100 text-emerald-700' :
                        resource.category === 'Youth' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {resource.category}
                    </span>

                    <span className="text-slate-400 flex items-center gap-1 text-sm italic">
                      <MapPin className="w-3 h-3" /> {resource.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {resource.name}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mt-4">
                    {resource.address && (
                      <div className="flex items-start gap-2 text-sm text-slate-500">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{resource.address}</span>
                      </div>
                    )}

                    {resource.phone && (
                      <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <a href={`tel:${resource.phone.replace(/\D/g, '')}`}>{resource.phone}</a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-2">
                    {resource.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {resource.website && (
                    <a
                      href={`https://${resource.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm font-semibold"
                    >
                      Website <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600">No resources found</h3>
            <p className="text-slate-400">Try adjusting your search or category filters.</p>
          </div>
        )}
      </main>

      <footer className="bg-slate-800 text-slate-400 py-12 mt-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-400" /> Emergency Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Suicide & Crisis Lifeline: Dial 988</li>
              <li>• Trevor Project (Youth): 866-488-7386</li>
              <li>• Trans Lifeline: 877-565-8860</li>
              <li>• MA Behavioral Health Help Line: 833-773-2445</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" /> Community Note
            </h4>
            <p className="text-sm leading-relaxed">
              This directory is based on community-sourced data. Always check organization websites for the most up-to-date hours and service availability.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
