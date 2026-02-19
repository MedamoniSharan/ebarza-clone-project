import catSofas from "@/assets/cat-sofas.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catRugs from "@/assets/cat-rugs.jpg";
import catDecor from "@/assets/cat-decor.jpg";

const categories = [
  { name: "Sofas", image: catSofas },
  { name: "Bedroom Sets", image: catBedroom },
  { name: "Lighting", image: catLighting },
  { name: "Dining Tables", image: catDining },
  { name: "Outdoor", image: catOutdoor },
  { name: "Office", image: catOffice },
  { name: "Rugs", image: catRugs },
  { name: "Decor", image: catDecor },
];

const CategoriesGrid = () => {
  return (
    <section className="py-16 px-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
              <span className="absolute top-3 right-3 bg-badge text-badge-foreground text-xs px-3 py-1 rounded-sm font-body">
                SOON
              </span>
              <span className="absolute bottom-4 left-4 text-primary-foreground font-display text-xl md:text-2xl font-light">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
