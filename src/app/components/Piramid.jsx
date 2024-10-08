

export default function Pyramid() {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.level, ...styles.top, backgroundColor: '#FF6961' }}>
        <p>Prioridad 1</p>
      </div>
      <div style={{ ...styles.level, ...styles.middle, backgroundColor: '#FFB347' }}>
        <p>Prioridad 2</p>
        <p>Prioridad 3</p>
      </div>
      <div style={{ ...styles.level, ...styles.bottom, backgroundColor: '#77DD77' }}>
        <p>Prioridad 4</p>
        <p>Prioridad 5</p>
        <p>Prioridad 6</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    padding: '20px',
  },
  level: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)"
  },
  top: {
    width: '30%', // Nivel más alto, más pequeño
  },
  middle: {
    width: '60%', // Nivel intermedio, más grande
  },
  bottom: {
    width: '90%', // Nivel más bajo, más grande
  },
};

