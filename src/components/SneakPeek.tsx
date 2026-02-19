import productSofa from "@/assets/product-sofa.jpg";
import productBed from "@/assets/product-bed.jpg";
import productLamp from "@/assets/cat-lighting.jpg";
import productTable from "@/assets/product-table.jpg";

const products = [
  { name: "Modern Modular Sofa", image: productSofa },
  { name: "Luxury King Bed", image: productBed },
  { name: "Designer Pendant Lamp", image: productLamp },
  { name: "Marble Coffee Table", image: productTable },
];

const SneakPeek = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-muted-foreground mb-3">
            Sneak Peek
          </h2>
          <p className="text-muted-foreground/70 text-sm">
            Get a glimpse of our curated collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-foreground/80 mb-1.5">{product.name}</p>
              <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-sm">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
