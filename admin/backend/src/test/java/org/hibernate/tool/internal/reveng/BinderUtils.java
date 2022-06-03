package org.hibernate.tool.internal.reveng;

import org.hibernate.internal.util.collections.JoinedIterator;
import org.hibernate.mapping.Component;
import org.hibernate.mapping.PersistentClass;
import org.hibernate.mapping.Property;

import java.util.*;

public class BinderUtils {

    public static String makeUnique(
    		Iterator<Property> props,
    		String originalPropertyName) {
        int cnt = 0;
        String propertyName = originalPropertyName;
        Set<String> uniqueNames = new HashSet<String>();
        while ( props.hasNext() ) {
            Property element = props.next();
            uniqueNames.add( element.getName() );
        }
        while( uniqueNames.contains(propertyName) ) {
            cnt++;
            propertyName = originalPropertyName + "_" + cnt;
        }
        return propertyName;
    }

    @SuppressWarnings("unchecked")
    public static String makeUnique(PersistentClass clazz, String propertyName) {
        List<Property> list = new ArrayList<Property>();
        if( clazz.hasIdentifierProperty() ) {
            list.add( clazz.getIdentifierProperty() );
        }
        if( clazz.isVersioned() ) {
            list.add( clazz.getVersion() );
        }
		Iterator<Property> propertyClosureIterator = clazz.getPropertyClosureIterator();
        JoinedIterator<Property> iterator =
        		new JoinedIterator<Property>(
        				list.iterator(),
        				propertyClosureIterator);
        return BinderUtils.makeUnique(iterator, propertyName);
    }

    @SuppressWarnings("unchecked")
	public static String makeUnique(Component clazz, String propertyName) {
        return BinderUtils.makeUnique(clazz.getPropertyIterator(), propertyName);
    }

	public static Map<?,?> safeMap(Map<?,?> map) {
		if(map==null) {
			return Collections.emptyMap();
		} else {
			return map;
		}
	}

}
