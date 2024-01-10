// Fonction pour calculer le produit scalaire de deux vecteurs
const dot_product = (v1, v2) => {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  };
  
  // Fonction pour vérifier si deux vecteurs sont orthogonaux
  const estOrthogonal = (v1, v2) => {
    const ps = dot_product(v1, v2);
    return ps === 0;
  };
  
  // Algorithme pour vérifier l'orthogonalité pour n vecteurs
  const VerifierOrthogonalitePourNVecteurs = (vectors) => {
    const n = vectors.length;
    if (n < 2) {
        console.log("Pas assez de vecteurs pour verifier leurs ortogonalités");
    }
  
    for (let i = 0; i < n; i++) {
      const v1 = vectors[i];
      for (let j = i + 1; j < n; j++) {
        const v2 = vectors[j];
        if (!estOrthogonal(v1, v2)) {
          console.log(`les vecteurs ${v1} et ${v2} ne sont pas orthogonaux`);
             
        }else{
            console.log(`les vecteurs ${v1} et ${v2} sont orthogonaux`);
   
        }
      }
    }
    };
  
  
  const vectors = [
    [1, 2, 3], [4, -1, 2],
    [2, 4, 6], [1, -2, 1],
    [3, 0, 1], [0, 1, 0]
  ];
  
  VerifierOrthogonalitePourNVecteurs(vectors);
  