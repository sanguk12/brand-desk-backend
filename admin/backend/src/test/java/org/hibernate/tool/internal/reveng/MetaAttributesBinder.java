package org.hibernate.tool.internal.reveng;

import org.hibernate.mapping.*;
import org.hibernate.tool.api.reveng.ReverseEngineeringStrategy;

import java.util.Iterator;
import java.util.Map;

public class MetaAttributesBinder {

    public static Property bindMetaAttributes(
    		Property property,
    		ReverseEngineeringStrategy revengStrategy,
    		Table table,
    		String defaultCatalog,
    		String defaultSchema) {
    	Iterator<Selectable> columnIterator = property.getValue().getColumnIterator();
		while(columnIterator.hasNext()) {
			Column col = (Column) columnIterator.next();
			Map<String,MetaAttribute> map = RevEngUtils.getColumnToMetaAttributesInRevengStrategy(
					revengStrategy,
					table,
					defaultCatalog,
					defaultSchema,
					col.getName());
			if(map!=null) {
				property.setMetaAttributes(map);
			}
		}

		return property;
    }

}
