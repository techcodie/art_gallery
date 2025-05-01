import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './ArtGallery/Nav/Navbar'
import SearchBar from './ArtGallery/Search/SearchBar'
import Home from './ArtGallery/Pages/Home'
import Gallery from './ArtGallery/Pages/Gallery'
import Artists from './ArtGallery/Pages/Artists'
import About from './ArtGallery/Pages/About'
import Footer from './ArtGallery/Components/Footer'

function App() {
  const [artworks, setArtworks] = useState([])
  const [filteredArtworks, setFilteredArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const mockArtworks = [
          {
            id: 1,
            title: 'Starry Night',
            artist: 'Vincent van Gogh',
            image: 'https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg',
            year: '1889',
            description: 'The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.',
            category: 'Post-Impressionism'
          },
          {
            id: 2,
            title: 'Mona Lisa',
            artist: 'Leonardo da Vinci',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
            year: '1503',
            description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".',
            category: 'Renaissance'
          },
          {
            id: 3,
            title: 'The Scream',
            artist: 'Edvard Munch',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/1200px-The_Scream.jpg',
            year: '1893',
            description: 'The Scream is the popular name given to a composition created by Norwegian Expressionist artist Edvard Munch in 1893. The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition.',
            category: 'Expressionism'
          },
          {
            id: 4,
            title: 'Girl with a Pearl Earring',
            artist: 'Johannes Vermeer',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1200px-1665_Girl_with_a_Pearl_Earring.jpg',
            year: '1665',
            description: 'Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer. It is a tronie of a girl with a headscarf and a pearl earring. The painting has been in the collection of the Mauritshuis in The Hague since 1902.',
            category: 'Dutch Golden Age'
          },
          {
            id: 5,
            title: 'The Persistence of Memory',
            artist: 'Salvador Dalí',
            image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
            year: '1931',
            description: 'The Persistence of Memory is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. The painting depicts a dreamworld in which common objects are deformed and displayed in a bizarre and irrational way.',
            category: 'Surrealism'
          },
          {
            id: 6,
            title: 'The Birth of Venus',
            artist: 'Sandro Botticelli',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1200px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
            year: '1486',
            description: 'The Birth of Venus is a painting by the Italian artist Sandro Botticelli, probably executed in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown.',
            category: 'Renaissance'
          },
          {
            id: 7,
            title: 'Guernica',
            artist: 'Pablo Picasso',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/1200px-PicassoGuernica.jpg',
            year: '1937',
            description: 'Guernica is a large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history.',
            category: 'Cubism'
          },
          {
            id: 8,
            title: 'The Night Watch',
            artist: 'Rembrandt',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg',
            year: '1642',
            description: 'The Night Watch is a 1642 painting by Rembrandt van Rijn. It is in the collection of the Amsterdam Museum but is prominently displayed in the Rijksmuseum as the best-known painting in its collection.',
            category: 'Dutch Golden Age'
          },
          {
            id: 9,
            title: 'Impression, Sunrise',
            artist: 'Claude Monet',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1200px-Monet_-_Impression%2C_Sunrise.jpg',
            year: '1872',
            description: 'Impression, Sunrise is a painting by Claude Monet first shown at what would become known as the "Exhibition of the Impressionists" in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement.',
            category: 'Impressionism'
          },
          {
            id: 12,
            title: 'The Great Wave off Kanagawa',
            artist: 'Katsushika Hokusai',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1200px-Tsunami_by_hokusai_19th_century.jpg',
            year: '1831',
            description: 'The Great Wave off Kanagawa is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji.',
            category: 'Ukiyo-e'
          },
          {
            id: 13,
            title: 'The Garden of Earthly Delights',
            artist: 'Hieronymus Bosch',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1200px-The_Garden_of_earthly_delights.jpg',
            year: '1515',
            description: 'The Garden of Earthly Delights is the modern title given to a triptych oil painting on oak panel painted by the Early Netherlandish master Hieronymus Bosch, between 1490 and 1510.',
            category: 'Northern Renaissance'
          },
          {
            id: 14,
            title: 'The Creation of Adam',
            artist: 'Michelangelo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/2880px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
            year: '1512',
            description: 'The Creation of Adam is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel\'s ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man.',
            category: 'Renaissance'
          },
          {
            id: 16,
            title: 'The Son of Man',
            artist: 'René Magritte',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg',
            year: '1964',
            description: 'The Son of Man is a 1964 painting by the Belgian surrealist painter René Magritte. It is perhaps his best-known artwork. The painting consists of a man in an overcoat and a bowler hat standing in front of a low wall, beyond which is the sea and a cloudy sky.',
            category: 'Surrealism'
          },
          {
            id: 17,
            title: 'American Gothic',
            artist: 'Grant Wood',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/960px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg',
            year: '1930',
            description: 'American Gothic is a 1930 painting by Grant Wood in the collection of the Art Institute of Chicago. Wood was inspired to paint what is now known as the American Gothic House in Eldon, Iowa, along with "the kind of people I fancied should live in that house."',
            category: 'Regionalism'
          },
          {
            id: 18,
            title: 'The Thinker',
            artist: 'Auguste Rodin',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/500px-Mus%C3%A9e_Rodin_1.jpg',
            year: '1902',
            description: 'The Thinker is a bronze sculpture by Auguste Rodin, usually placed on a stone pedestal. The work shows a nude male figure of heroic size sitting on a rock with his chin resting on one hand as though deep in thought, and is often used as an image to represent philosophy.',
            category: 'Sculpture'
          },
          {
            id: 19,
            title: 'The School of Athens',
            artist: 'Raphael',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/960px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
            year: '1511',
            description: 'The School of Athens is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as a part of Raphael\'s commission to decorate the rooms now known as the Stanze di Raffaello, in the Apostolic Palace in the Vatican.',
            category: 'Renaissance'
          },
        ]
        setArtworks(mockArtworks)
        setFilteredArtworks(mockArtworks)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching artworks:', error)
        setLoading(false)
      }
    }

    fetchArtworks()
  }, [])

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredArtworks(artworks)
    } else {
      const filtered = artworks.filter(artwork =>
        artwork.title.toLowerCase().includes(term.toLowerCase()) ||
        artwork.artist.toLowerCase().includes(term.toLowerCase()) ||
        artwork.category.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredArtworks(filtered)
    }
  }

  if (loading) {
    return <div className="loading">Loading artworks...</div>
  }

  return (
    <div className="art-gallery">
      <Navbar />
      <SearchBar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home artworks={filteredArtworks} />} />
        <Route path="/gallery" element={<Gallery artworks={filteredArtworks} />} />
        <Route path="/artists" element={<Artists artworks={filteredArtworks} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
