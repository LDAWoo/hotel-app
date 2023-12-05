import React from "react";
import styles from "./ProductsDashboard.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import ProductActivity from "./ProductActivity";
import ProductViews from "./ProductViews";
import Products from "./Products";

const ProductsDashboard = () => {
    return (
        <>
            <div className={styles.section}>
                <Overview className={styles.card} />
                <div className={styles.row}>
                    <div className={styles.col}>
                        <ProductActivity />
                    </div>
                    <div className={styles.col}>
                        <ProductViews />
                    </div>
                </div>
                <Products />
            </div>
            <TooltipGlodal />
        </>
    );
};

export default ProductsDashboard;
