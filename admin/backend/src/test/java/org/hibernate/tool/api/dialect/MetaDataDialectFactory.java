package org.hibernate.tool.api.dialect;

import org.hibernate.dialect.*;
import org.hibernate.internal.util.ReflectHelper;
import org.hibernate.tool.internal.dialect.*;
import org.hibernate.tool.internal.reveng.JdbcBinderException;

import java.util.Properties;

public class MetaDataDialectFactory {

    private MetaDataDialectFactory() {
    }

    public static MetaDataDialect createMetaDataDialect(Dialect dialect, Properties cfg) {
        String property = cfg.getProperty("hibernatetool.metadatadialect");
        MetaDataDialect mdd = fromClassName(property);
        if (mdd == null) {
            mdd = fromDialect(dialect);
        }
        if (mdd == null) {
            mdd = fromDialectName(dialect.getClass().getName());
        }
        if (mdd == null) {
            mdd = new JDBCMetaDataDialect();
        }
        return mdd;
    }

    @SuppressWarnings("unchecked")
    public static MetaDataDialect fromClassName(String property) {
        if (property != null) {
            try {
                return ((Class<MetaDataDialect>) ReflectHelper.classForName(property, MetaDataDialectFactory.class))
                        .getDeclaredConstructor().newInstance();
            } catch (Exception e) {
                throw new JdbcBinderException("Could not load MetaDataDialect: " + property, e);
            }
        } else {
            return null;
        }
    }

    public static MetaDataDialect fromDialect(Dialect dialect) {
        if (dialect != null) {
            if (dialect instanceof Oracle8iDialect) {
                return new OracleMetaDataDialect();
            } else if (dialect instanceof H2Dialect) {
                return new H2MetaDataDialect();
            } else if (dialect instanceof MySQLDialect) {
                return new MySQLMetaDataDialect();
            } else if (dialect instanceof HSQLDialect) {
                return new HSQLMetaDataDialect();
            } else if (dialect instanceof SQLServer2012Dialect) {
                return new SQLServerMetaDataDialect();
            }
        }
        return null;
    }

    public static MetaDataDialect fromDialectName(String dialect) {
        if (dialect.toLowerCase().contains("oracle")) {
            return new OracleMetaDataDialect();
        }
        if (dialect.toLowerCase().contains("mysql")) {
            return new MySQLMetaDataDialect();
        }
        if (dialect.toLowerCase().contains("h2")) {
            return new H2MetaDataDialect();
        }
        if (dialect.toLowerCase().contains("hsql")) {
            return new HSQLMetaDataDialect();
        }
        if (dialect.toLowerCase().contains("sqlserver")) {
            return new SQLServerMetaDataDialect();
        }
        return null;
    }

}
