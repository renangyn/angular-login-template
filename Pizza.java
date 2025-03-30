public class Pizza {
    private String massa;
    private String molho;
    private boolean queijo;
    private boolean calabresa;
    private boolean champignon;

    public Pizza(PizzaBuilder builder) {
        this.massa = builder.massa;
        this.molho = builder.molho;
        this.queijo = builder.queijo;
        this.calabresa = builder.calabresa;
        this.champignon = builder.champignon;
    }

    public static class PizzaBuilder {
        private String massa;
        private String molho;
        private boolean queijo;
        private boolean calabresa;
        private boolean champignon;

        public PizzaBuilder(String massa, String molho) {
            this.massa = massa;
            this.molho = molho;
        }

        public PizzaBuilder queijo(boolean queijo) {
            this.queijo = queijo;
            return this;
        }

        public PizzaBuilder calabresa(boolean calabresa) {
            this.calabresa = calabresa;
            return this;
        }

        public PizzaBuilder champignon(boolean champignon) {
            this.champignon = champignon;
            return this;
        }

        public Pizza build() {
            return new Pizza(this);
        }
    }
    public static void main(String[] args) {
    Pizza pizza = new Pizza.PizzaBuilder("Tradicional", "Tomate com manjericão")
            .queijo(true)
            .calabresa(true)
            .champignon(true)
            .build();
            System.out.println(pizza);
    }
    @Override
    public String toString() {
        return "Pizza [massa=" + massa + ", molho=" + molho + ", queijo=" + queijo + ", calabresa=" + calabresa
                + ", champignon=" + champignon + "]";
    }
    
}