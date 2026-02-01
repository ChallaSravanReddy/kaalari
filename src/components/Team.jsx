import '../styles/Team.css';
import rishiImg from '../assets/Rishi.jpeg';
import adithyaImg from '../assets/adithya.jpg';
import swachathaImg from '../assets/swachatha.jpg';
import chanduImg from '../assets/chandu.jpg';
import pradeepImg from '../assets/pradeep.jpg';
import pavithraImg from '../assets/pavithra.jpg';
import sravanImg from '../assets/sravan.jpg';
import prudhviImg from '../assets/prudhvi.jpg';
import poorviImg from '../assets/poorvi.jpeg';

const Team = () => {
  const teamCategories = [
    {
      category: 'Leadership',
      members: [
        {
          name: 'Rishi',
          role: 'Founder',
          image: rishiImg
        },
        {
          name: 'Aditya',
          role: 'Co-Founder',
          image: adithyaImg
        }
      ]
    },
    {
      category: 'Management',
      members: [
        {
          name: 'Swachatha',
          role: 'Manager',
          image: swachathaImg
        },
        {
          name: 'Poorvi',
          role: 'Project Coordinator',
          image: poorviImg
        }
      ]
    },
    {
      category: 'Actors',
      members: [
        {
          name: 'Pradeep',
          role: 'Actor',
          image: pradeepImg
        },
        {
          name: 'Pavithra',
          role: 'Actor',
          image: pavithraImg
        }
      ]
    },
    {
      category: 'Production & Technical',
      members: [
        {
          name: 'Chandu',
          role: 'Cinematographer',
          image: chanduImg
        },
        {
          name: 'Sravan',
          role: 'Web Analytics & Data Tracking',
          image: sravanImg
        },
        {
          name: 'Prudhvi',
          role: 'Client Manager',
          image: prudhviImg
        }
      ]
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet the Minds Behind the <span className="highlight">Magic</span></h2>
          <p className="team-subtitle">Our talented team of digital experts</p>
        </div>
        {teamCategories.map((category, catIndex) => (
          <div key={catIndex} className="team-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="team-grid">
              {category.members.map((member, index) => (
                <div className="team-card" key={index}>
                  {member.image && (
                    <div className="team-image-wrapper">
                      <img src={member.image} alt={member.name} className="team-image" />
                      <div className="team-socials">
                        <a href="#" className="social-link">👔</a>
                        <a href="#" className="social-link">🐦</a>
                        <a href="#" className="social-link">📧</a>
                      </div>
                    </div>
                  )}
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.role}</p>
                  {member.skills && (
                    <div className="team-skills">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
