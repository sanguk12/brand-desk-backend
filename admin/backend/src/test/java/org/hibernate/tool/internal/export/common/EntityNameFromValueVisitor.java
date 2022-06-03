package org.hibernate.tool.internal.export.common;

import org.hibernate.mapping.*;

public class EntityNameFromValueVisitor extends DefaultValueVisitor {

	public EntityNameFromValueVisitor() {
		super( true );
	}

	public EntityNameFromValueVisitor(boolean b) {
		super(b);
	}

	public Object accept(OneToOne o) {
		return acceptToOne(o);
	}

	public Object accept(ManyToOne o) {
		return acceptToOne(o);
	}

	private Object acceptToOne(ToOne value) {
		return value.getReferencedEntityName(); // should get the cfg and lookup the persistenclass.
	}

	public Object accept(OneToMany value) {
		return value.getAssociatedClass().getEntityName();
	}

	public Object acceptCollection(Collection c) {
		return c.getElement().accept( this );
	}

	public Object accept(Bag o) {
		return acceptCollection( o );
	}

	public Object accept(List o) {
		return acceptCollection( o );
	}

	public Object accept(IdentifierBag o) {
		return acceptCollection( o );
	}

	public Object accept(Set o) {
		return acceptCollection( o );
	}

	public Object accept(Map o) {
		return acceptCollection( o );
	}

	public Object accept(Array o) {
		return acceptCollection( o );
	}

	public Object accept(PrimitiveArray o) {
		return acceptCollection( o );
	}

	public Object accept(SimpleValue o) {
		return null; // TODO: return o.getTypeName() ? (it is not an association)
	}

	public Object accept(Component component) {
		if(component.isDynamic()) {
			return null; //"java.util.Map"; (not an association)
		}
		return component.getComponentClassName();
	}
}
