import { useState } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((c) => {
        return (
          <CategoryButton
            key={c}
            category={c}
            onChangeCategory={() => changeCategoryHandler(c)}
            className={`btn cat__btn ${
              activeCategory === c ? 'primary' : 'white'
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCategories;
