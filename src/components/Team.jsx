import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Strategy Lead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lisa Anderson',
      role: 'Content Strategist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Wilson',
      role: 'Video Production Lead',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet the Minds Behind the <span className="highlight">Magic</span></h2>
          <p className="team-subtitle">Our talented team of digital experts</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-socials">
                  <a href="#" className="social-link">👔</a>
                  <a href="#" className="social-link">🐦</a>
                  <a href="#" className="social-link">📧</a>
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.role}</p>
              <p className="team-bio">Expert in their field with a passion for excellence.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
